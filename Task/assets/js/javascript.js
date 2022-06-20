// 

var array1 = [
    {
        company: 'Sony',
        product: 'Playstation',
        amount: '2200'
    },
    {
        company: 'Sony',
        product: 'Playstation',
        amount: '2200'
    },
    {
        company: 'Sony',
        product: 'Playstation',
        amount: '2200'
    },
    {
        company: 'Sony',
        product: 'Playstation',
        amount: '2200'
    },
    {
        company: 'Sony',
        product: 'Playstation',
        amount: '2200'
    },
    {
        company: 'Sony',
        product: 'Playstation',
        amount: '2200'
    },
];


function phoneBundlesItems() {
    var items = '<div class="row">';
    array1.forEach(item => {
        items = items + '<div class="col-xl-2 col-md-4 col-sm-6  my-3">' +
                            '<div>' +
                                '<div class="positionRelative text-center">' +
                                    '<div class="bunndlesItemHeader">' +
                                        '<span>'+ item.company +'</span> <br>' +
                                            '<span>'+ item.product +'</span>' +
                                    '</div>' +
                                    '<img src="assets/img/Frame 236.png" alt="Error" style="width: 100%;" class="phoneBundlesImg">' +
                                    '<div class="py-3 px-3 bunndlesItemAmountBox">' +
                                        '<span>₹ '+ item.amount +'</span>' +
                                        '<span class="floatRight"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
    });
    items = items + '<div>';
    document.getElementById("phoneBundlesItems").innerHTML = items;
    // $('#phoneBundlesItems').html(items);
    console.log(items)
}

phoneBundlesItems();