// 1. if ticket numbers is less than 100, per ticket price: 100,
// 2. if ticket numbers is more than 100, but less than 200, first 100 tickets will be 100 taka/per ticket,
// rest tickets will be 90 taka per piece.
// 3. if you purchase more than 200 tickets, first 100 tickets will be 100 taka/ticket
//  101- 200 90 taka/ticket
//  200 er pore 70 taka/ticket
// --------------------------------

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if( ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if( ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100price = 90 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100price + restTicketPrice;
        return totalPrice;
    }
}

const price = ticketPrice(220);
console.log("price :", price);