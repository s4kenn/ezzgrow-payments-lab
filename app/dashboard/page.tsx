import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const featureItemsmonth = [
  { name: "9 Social Media Posts / handle" },
  { name: "Website Development and Maintenance" },
  { name: "24/7 Support" },
  { name: "Active Email Campaigns" },
  { name: "Private Communication Channel" },
];

const featureItemshalfyearly = [
  { name: "66 Social Media Posts / handle" },
  { name: "Website Development and Maintenance" },
  { name: "24/7 Support" },
  { name: "Active Email Campaigns" },
  { name: "Private Communication Channel" },
  { name: "Robust Data Analysis" },
];

const featureItemsyearly = [
  { name: "156 Social Media Posts / handle" },
  { name: "Website Development and Maintenance" },
  { name: "24/7 Support" },
  { name: "Active Email Campaigns" },
  { name: "Private Communication Channel" },
  { name: "Robust Data Analysis" },
  { name: "Customised GPT Tools" },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="bg-black-100 text-white-700 font-medium rounded-md p-4">
        Click on <span className="font-semibold text-blue-500">Billing</span> to
        Manage/Create subscription.
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 m-4">
        <Card className="flex flex-col flex-1">
          <CardContent className="py-8">
            <div>
              <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">
                Monthly
              </h3>
            </div>
            <div className="mt-4 flex items-baseline text-6xl font-extrabold">
              ₹6666{" "}
              <span className="ml-1 text-2xl text-muted-foreground">/mo</span>
            </div>
            <p className="mt-5 text-lg text-muted-foreground">
              Subscribe for a month and get
            </p>
          </CardContent>
          <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {featureItemsmonth.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card className="flex flex-col flex-1">
          <CardContent className="py-8">
            <div>
              <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">
                Coming Soon
              </h3>
            </div>
            <div className="mt-4 flex items-baseline text-6xl font-extrabold">
              ₹17171{" "}
              <span className="ml-1 text-2xl text-muted-foreground">/hy</span>
            </div>
            <p className="mt-5 text-lg text-muted-foreground">
              Subscribe for 6 months and get
            </p>
          </CardContent>
          <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {featureItemshalfyearly.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card className="flex flex-col flex-1">
          <CardContent className="py-8">
            <div>
              <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">
                Coming Soon
              </h3>
            </div>
            <div className="mt-4 flex items-baseline text-6xl font-extrabold">
              ₹36363{" "}
              <span className="ml-1 text-2xl text-muted-foreground">/y</span>
            </div>
            <p className="mt-5 text-lg text-muted-foreground">
              Subscribe for a year and get
            </p>
          </CardContent>
          <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {featureItemsyearly.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
