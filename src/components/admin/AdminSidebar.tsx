import { Package, Users, MessageSquare, TrendingUp, Settings, BarChart3, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const sidebarItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'contacts', label: 'Contacts', icon: MessageSquare },
  { id: 'purchases', label: 'Orders', icon: TrendingUp },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  return (
    <aside className="w-64 bg-luxury-navy text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-luxury-gold">Technexus Admin</h2>
        <p className="text-sm text-luxury-gray mt-1">Management Portal</p>
      </div>
      
      <nav className="mt-8">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center px-6 py-3 text-left transition-colors duration-200",
                activeTab === item.id
                  ? "bg-luxury-gold text-luxury-navy font-semibold"
                  : "text-luxury-gray hover:bg-luxury-navy-light hover:text-white"
              )}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};