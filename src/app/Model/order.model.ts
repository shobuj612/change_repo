export class Order {
  order_id: number;
  buyer_id: number;
  style_no: string;
  order_qty: number;
  order_date: Date;
  delivery_date: Date;
  status: string;

  constructor() {
    this.order_id = 0;       // Initializing order_id as a number
    this.buyer_id = 0;       // Initializing buyer_id as a number
    this.style_no = '';
    this.order_qty = 0;
    this.order_date = new Date();
    this.delivery_date = new Date();
    this.status = '';
  }
}
