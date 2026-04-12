import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/use-page-seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart3,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  Search,
  RefreshCw,
  Eye,
  X,
  Package,
  Calendar,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formatGHS } from "@/data/pricing-data";

type EstimateStatus = "pending" | "reviewed" | "contacted" | "converted" | "declined";

const statusConfig: Record<EstimateStatus, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: "Pending", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400", icon: <Clock className="h-3 w-3" /> },
  reviewed: { label: "Reviewed", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", icon: <Eye className="h-3 w-3" /> },
  contacted: { label: "Contacted", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400", icon: <MessageSquare className="h-3 w-3" /> },
  converted: { label: "Converted", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400", icon: <CheckCircle2 className="h-3 w-3" /> },
  declined: { label: "Declined", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400", icon: <AlertCircle className="h-3 w-3" /> },
};

const timeRanges = [
  { label: "Last 24h", days: 1 },
  { label: "7 days", days: 7 },
  { label: "30 days", days: 30 },
  { label: "All time", days: 0 },
];

const AdminDashboard = () => {
  usePageSEO({
    title: "Admin Dashboard | Gotechpluz",
    description: "Internal dashboard for managing price estimates and client requests.",
    canonical: "/admin",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [timeRange, setTimeRange] = useState(30);
  const [selectedEstimate, setSelectedEstimate] = useState<any | null>(null);

  const { data: estimates = [], isLoading, refetch } = useQuery({
    queryKey: ["estimates", timeRange],
    queryFn: async () => {
      let query = supabase
        .from("estimates")
        .select("*")
        .order("created_at", { ascending: false });

      if (timeRange > 0) {
        const since = new Date();
        since.setDate(since.getDate() - timeRange);
        query = query.gte("created_at", since.toISOString());
      }

      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: EstimateStatus }) => {
      const { error } = await supabase
        .from("estimates")
        .update({ status })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["estimates"] });
      toast({ title: "Status updated" });
    },
    onError: (err: any) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const filtered = useMemo(() => {
    return estimates.filter((e: any) => {
      const matchesStatus = statusFilter === "all" || e.status === statusFilter;
      const matchesSearch =
        !searchTerm ||
        e.client_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.client_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.package_name?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [estimates, statusFilter, searchTerm]);

  // Stats
  const stats = useMemo(() => {
    const total = estimates.length;
    const totalValue = estimates.reduce((s: number, e: any) => s + Number(e.grand_total || 0), 0);
    const pending = estimates.filter((e: any) => e.status === "pending").length;
    const converted = estimates.filter((e: any) => e.status === "converted").length;
    const avgValue = total > 0 ? totalValue / total : 0;
    const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : "0";
    return { total, totalValue, pending, converted, avgValue, conversionRate };
  }, [estimates]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Estimates Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage client price estimates and track conversions</p>
          </div>
          <Button variant="outline" onClick={() => refetch()} className="gap-2">
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Estimates</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">{formatGHS(stats.totalValue)}</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">{stats.pending}</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold">{stats.conversionRate}%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or package..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {Object.entries(statusConfig).map(([key, cfg]) => (
                  <SelectItem key={key} value={key}>{cfg.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-1">
              {timeRanges.map((tr) => (
                <Button
                  key={tr.days}
                  variant={timeRange === tr.days ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange(tr.days)}
                  className="text-xs"
                >
                  {tr.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Table */}
        <Card className="overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center text-muted-foreground">Loading estimates...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No estimates found</p>
              <p className="text-sm mt-1">Adjust your filters or wait for new submissions.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((est: any) => {
                    const sc = statusConfig[est.status as EstimateStatus] || statusConfig.pending;
                    return (
                      <TableRow key={est.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setSelectedEstimate(est)}>
                        <TableCell>
                          <p className="font-medium text-sm">{est.client_name || "—"}</p>
                          <p className="text-xs text-muted-foreground">{est.client_email}</p>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">{est.package_name}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-semibold">{formatGHS(Number(est.grand_total))}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${sc.color}`}>
                            {sc.icon} {sc.label}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{formatDate(est.created_at)}</TableCell>
                        <TableCell>
                          <div className="flex justify-center gap-1" onClick={(e) => e.stopPropagation()}>
                            <Select
                              value={est.status}
                              onValueChange={(val) => updateStatus.mutate({ id: est.id, status: val as EstimateStatus })}
                            >
                              <SelectTrigger className="h-8 w-[120px] text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(statusConfig).map(([key, cfg]) => (
                                  <SelectItem key={key} value={key}>{cfg.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>

        {/* Detail Modal Overlay */}
        {selectedEstimate && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedEstimate(null)}>
            <Card className="w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 relative" onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="icon" className="absolute top-3 right-3" onClick={() => setSelectedEstimate(null)}>
                <X className="h-4 w-4" />
              </Button>

              <h3 className="text-xl font-bold mb-1">Estimate Details</h3>
              <p className="text-sm text-muted-foreground mb-5">{formatDate(selectedEstimate.created_at)}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Client</p>
                    <p className="font-medium">{selectedEstimate.client_name || "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">{selectedEstimate.client_email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Package</p>
                    <p className="font-medium">{selectedEstimate.package_name}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Line Items</p>
                  <div className="space-y-2">
                    {(selectedEstimate.line_items || []).map((item: any, i: number) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-semibold">{formatGHS(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg">Total</p>
                  <p className="font-bold text-lg text-primary">{formatGHS(Number(selectedEstimate.grand_total))}</p>
                </div>

                {selectedEstimate.custom_features && (
                  <>
                    <Separator />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Custom Requirements</p>
                      <p className="text-sm bg-muted/50 rounded-lg p-3">{selectedEstimate.custom_features}</p>
                    </div>
                  </>
                )}

                <Separator />

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Update Status</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(statusConfig).map(([key, cfg]) => (
                      <Button
                        key={key}
                        variant={selectedEstimate.status === key ? "default" : "outline"}
                        size="sm"
                        className="text-xs gap-1"
                        onClick={() => {
                          updateStatus.mutate({ id: selectedEstimate.id, status: key as EstimateStatus });
                          setSelectedEstimate({ ...selectedEstimate, status: key });
                        }}
                      >
                        {cfg.icon} {cfg.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
