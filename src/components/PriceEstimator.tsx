import { useState, useMemo } from "react";
import { packages, addOns, formatGHS, type Package, type AddOn } from "@/data/pricing-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Package as PackageIcon,
  Puzzle,
  FileText,
  Send,
  Star,
  Info,
  Plus,
  Minus,
} from "lucide-react";

type Step = "package" | "addons" | "details" | "invoice";

const PriceEstimator = () => {
  const { openWhatsApp } = useWhatsApp();

  const [step, setStep] = useState<Step>("package");
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [complexitySlider, setComplexitySlider] = useState(50);
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, number>>({}); // id → slider 0-100
  const [customFeatures, setCustomFeatures] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [extraPages, setExtraPages] = useState(0);

  const pkg = packages.find((p) => p.id === selectedPkg) ?? null;

  const packagePrice = useMemo(() => {
    if (!pkg) return 0;
    const range = pkg.priceMax - pkg.priceMin;
    return Math.round(pkg.priceMin + range * (complexitySlider / 100));
  }, [pkg, complexitySlider]);

  const extraPagesPrice = useMemo(() => extraPages * 350, [extraPages]);

  const addOnPrices = useMemo(() => {
    const map: Record<string, number> = {};
    Object.entries(selectedAddOns).forEach(([id, slider]) => {
      const addon = addOns.find((a) => a.id === id);
      if (!addon) return;
      const max = addon.priceMax ?? addon.priceMin;
      const range = max - addon.priceMin;
      map[id] = Math.round(addon.priceMin + range * (slider / 100));
    });
    return map;
  }, [selectedAddOns]);

  const totalAddOns = Object.values(addOnPrices).reduce((s, v) => s + v, 0);
  const grandTotal = packagePrice + extraPagesPrice + totalAddOns;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => {
      const next = { ...prev };
      if (id in next) delete next[id];
      else next[id] = 0;
      return next;
    });
  };

  const setAddOnSlider = (id: string, val: number) => {
    setSelectedAddOns((prev) => ({ ...prev, [id]: val }));
  };

  const buildInvoiceText = () => {
    const lines: string[] = [
      "📋 *GOTECHPLUZ — Price Estimate*",
      "",
      `*Client:* ${clientName || "—"}`,
      `*Email:* ${clientEmail || "—"}`,
      "",
      `*Package:* ${pkg?.name}`,
      `*Package Price:* ${formatGHS(packagePrice)}`,
    ];
    if (extraPages > 0) {
      lines.push(`*Extra Pages (${extraPages}):* ${formatGHS(extraPagesPrice)}`);
    }
    if (Object.keys(addOnPrices).length > 0) {
      lines.push("", "*Add-Ons:*");
      Object.entries(addOnPrices).forEach(([id, price]) => {
        const addon = addOns.find((a) => a.id === id);
        lines.push(`  • ${addon?.name}: ${formatGHS(price)}`);
      });
    }
    if (customFeatures.trim()) {
      lines.push("", `*Custom Requirements:*\n${customFeatures}`);
    }
    lines.push("", `*━━━━━━━━━━━━━━━━*`, `*Estimated Total: ${formatGHS(grandTotal)}*`);
    lines.push("", "_Generated via gotechpluz.com/price-estimator_");
    return lines.join("\n");
  };

  const handleWhatsAppShare = () => {
    openWhatsApp({
      source: "price_estimator",
      message: buildInvoiceText(),
      toastTitle: "Sending estimate via WhatsApp",
    });
  };

  const steps: { key: Step; label: string; icon: React.ReactNode }[] = [
    { key: "package", label: "Package", icon: <PackageIcon className="h-4 w-4" /> },
    { key: "addons", label: "Add-Ons", icon: <Puzzle className="h-4 w-4" /> },
    { key: "details", label: "Details", icon: <FileText className="h-4 w-4" /> },
    { key: "invoice", label: "Invoice", icon: <Send className="h-4 w-4" /> },
  ];

  const stepIndex = steps.findIndex((s) => s.key === step);
  const canNext =
    (step === "package" && selectedPkg) ||
    step === "addons" ||
    step === "details";

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s.key} className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => i <= stepIndex && setStep(s.key)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                i === stepIndex
                  ? "bg-primary text-primary-foreground shadow-md"
                  : i < stepIndex
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i < stepIndex ? <Check className="h-3.5 w-3.5" /> : s.icon}
              <span className="hidden sm:inline">{s.label}</span>
            </button>
            {i < steps.length - 1 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Package */}
      {step === "package" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Choose Your Package</h2>
            <p className="text-muted-foreground mt-1">Select the package that fits your needs</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {packages.map((p) => {
              const selected = selectedPkg === p.id;
              return (
                <Card
                  key={p.id}
                  onClick={() => {
                    setSelectedPkg(p.id);
                    setComplexitySlider(50);
                    setExtraPages(0);
                  }}
                  className={`p-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 ${
                    selected
                      ? "ring-2 ring-primary shadow-md border-primary/30"
                      : "hover:shadow-soft border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-base">{p.name}</h3>
                    {selected && (
                      <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{p.idealFor}</p>
                  <p className="font-bold text-primary text-sm mb-3">
                    {formatGHS(p.priceMin)} – {formatGHS(p.priceMax)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <Badge key={f} variant="secondary" className="text-[10px] font-normal">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {pkg && (
            <Card className="p-6 mt-6 border-primary/20 bg-primary/5">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                Adjust Complexity — {pkg.name}
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Project scope & complexity
                  </label>
                  <Slider
                    value={[complexitySlider]}
                    onValueChange={([v]) => setComplexitySlider(v)}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Basic ({formatGHS(pkg.priceMin)})</span>
                    <span>Advanced ({formatGHS(pkg.priceMax)})</span>
                  </div>
                </div>

                {pkg.hasPageCount && (
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Extra pages beyond package (GH₵350/page)
                    </label>
                    <div className="flex items-center gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </Button>
                      <span className="font-semibold w-8 text-center">{extraPages}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setExtraPages(extraPages + 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                )}

                <p className="text-lg font-bold text-primary">
                  Estimated: {formatGHS(packagePrice + extraPagesPrice)}
                </p>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Step 2: Add-Ons */}
      {step === "addons" && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Add-On Features</h2>
            <p className="text-muted-foreground mt-1">Enhance your website with powerful extras</p>
          </div>
          {addOns.map((addon) => {
            const isSelected = addon.id in selectedAddOns;
            const hasRange = addon.priceMax !== null && addon.priceMax !== addon.priceMin;
            return (
              <Card
                key={addon.id}
                className={`p-4 transition-all ${
                  isSelected ? "ring-1 ring-primary/40 border-primary/20" : "border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleAddOn(addon.id)}
                    className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-primary border-primary"
                        : "border-input hover:border-primary/50"
                    }`}
                  >
                    {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{addon.name}</h4>
                      <span className="text-sm font-semibold text-primary">
                        {isSelected
                          ? formatGHS(addOnPrices[addon.id] ?? addon.priceMin)
                          : hasRange
                          ? `${formatGHS(addon.priceMin)} – ${formatGHS(addon.priceMax!)}`
                          : `+${formatGHS(addon.priceMin)}`}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{addon.description}</p>
                    {isSelected && hasRange && (
                      <div className="mt-3">
                        <Slider
                          value={[selectedAddOns[addon.id]]}
                          onValueChange={([v]) => setAddOnSlider(addon.id, v)}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                          <span>{formatGHS(addon.priceMin)}</span>
                          <span>{formatGHS(addon.priceMax!)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}

          <Card className="p-4 border-dashed border-2 border-primary/20">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Need something custom?</p>
                <p className="text-xs text-muted-foreground">
                  Describe any custom features in the next step — these will be quoted on request.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Step 3: Details */}
      {step === "details" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Your Details</h2>
            <p className="text-muted-foreground mt-1">Tell us about yourself and any custom needs</p>
          </div>
          <Card className="p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <Input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Kwame Mensah"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email (optional)</label>
                <Input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Custom Features / Special Requirements</label>
              <Textarea
                value={customFeatures}
                onChange={(e) => setCustomFeatures(e.target.value)}
                placeholder="Describe any additional pages, features, or integrations you need. These will be quoted on request..."
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                Custom features will be shared via WhatsApp for a tailored quote.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Step 4: Invoice */}
      {step === "invoice" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Your Estimate</h2>
            <p className="text-muted-foreground mt-1">Review and share via WhatsApp</p>
          </div>
          <Card className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-primary">Gotechpluz</h3>
                <p className="text-xs text-muted-foreground">Price Estimate</p>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <p>{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                {clientName && <p className="font-medium text-foreground">{clientName}</p>}
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Line items */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{pkg?.name} Package</p>
                  <p className="text-xs text-muted-foreground">{pkg?.idealFor}</p>
                </div>
                <p className="font-semibold">{formatGHS(packagePrice)}</p>
              </div>

              {extraPages > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <p>Extra Pages × {extraPages}</p>
                  <p className="font-semibold">{formatGHS(extraPagesPrice)}</p>
                </div>
              )}

              {Object.keys(addOnPrices).length > 0 && (
                <>
                  <Separator className="my-3" />
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Add-Ons</p>
                  {Object.entries(addOnPrices).map(([id, price]) => {
                    const addon = addOns.find((a) => a.id === id);
                    return (
                      <div key={id} className="flex justify-between items-center text-sm">
                        <p>{addon?.name}</p>
                        <p className="font-semibold">{formatGHS(price)}</p>
                      </div>
                    );
                  })}
                </>
              )}

              {customFeatures.trim() && (
                <>
                  <Separator className="my-3" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      Custom Requirements (on request)
                    </p>
                    <p className="text-sm bg-muted/50 rounded-lg p-3">{customFeatures}</p>
                  </div>
                </>
              )}
            </div>

            <Separator className="my-6" />

            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Estimated Total</p>
              <p className="text-2xl font-bold text-primary">{formatGHS(grandTotal)}</p>
            </div>

            <p className="text-[10px] text-muted-foreground mt-4">
              * This is an estimate. Final pricing may vary based on specific requirements.
              Up to 3 revision sessions included. Additional revisions: 5% of total per session.
            </p>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleWhatsAppShare}
              className="flex-1 bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white"
              size="lg"
            >
              <Send className="h-4 w-4 mr-2" />
              Share via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setStep("package");
                setSelectedPkg(null);
                setSelectedAddOns({});
                setCustomFeatures("");
                setClientName("");
                setClientEmail("");
                setExtraPages(0);
                setComplexitySlider(50);
              }}
            >
              Start Over
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      {step !== "invoice" && (
        <div className="flex justify-between mt-10">
          <Button
            variant="ghost"
            onClick={() => setStep(steps[stepIndex - 1]?.key ?? "package")}
            disabled={stepIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <div className="flex items-center gap-4">
            {pkg && (
              <span className="text-sm font-semibold text-primary hidden sm:inline">
                Running total: {formatGHS(grandTotal)}
              </span>
            )}
            <Button
              onClick={() => setStep(steps[stepIndex + 1]?.key ?? "invoice")}
              disabled={!canNext}
              className="bg-gradient-primary hover:opacity-90"
            >
              {stepIndex === steps.length - 2 ? "View Estimate" : "Next"}{" "}
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceEstimator;
