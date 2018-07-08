export class GrowlModel {
  title: string;
  message: string;
  type: string;
}

export const GROWLES: GrowlModel[] = [
  {title: "Success message", message: "Order submitted", type: "SUCCESS"},
  {title: "Info message", message: "Order submitted", type: "INFO"},
  {title: "Error message", message: "Order submitted", type: "ERROR",}
];
