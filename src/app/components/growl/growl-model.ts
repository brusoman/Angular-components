export class GrowlModel {
  title: string;
  message: string;
  type: string;
  color: string;
}

export const GROWLES: GrowlModel[] = [
  {title: "Success message", message: "Order submitted", type: "SUCCESS", color: "#5cb85c"},
  {title: "Info message", message: "Order submitted", type: "INFO", color: "#2399e5"},
  {title: "Error message", message: "Order submitted", type: "ERROR", color: "#d9534f"}
];
