export class GrowlModel {
  title: string;
  message: string;
  type: string;
}

export const GROWLES: GrowlModel[] = [
  {title: "Success message", message: "Order submitted", type: "succeed"},
  {title: "Info message", message: "Order submitted", type: "info"},
  {title: "Error message", message: "Order submitted", type: "error",}
];

