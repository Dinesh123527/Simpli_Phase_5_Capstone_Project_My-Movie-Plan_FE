import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
})
export class PaymentSummaryComponent implements OnInit {
  paymentHandler: any = null;

  constructor() {}

  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51N5OP0SIx1e61LMF7eFCkzP7UtWT9TbkyI9faStuhb6ju3G7joCxUhTHxfLCjkIymmnuD9osiqAWnV3eUBjM5whn00FaPvPCG0',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('payment was Successful');
      },
    });
    paymentHandler.open({
      name: 'Movie Plan',
      description:
        'A one stop for movie tickets now purchase with only single click',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51N5OP0SIx1e61LMF7eFCkzP7UtWT9TbkyI9faStuhb6ju3G7joCxUhTHxfLCjkIymmnuD9osiqAWnV3eUBjM5whn00FaPvPCG0',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successful!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
