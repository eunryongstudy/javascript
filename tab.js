var 버튼 = $('.tab-button')

for(let i = 0; i < 3; i++){
    버튼.eq(i).on('click', function(){
        버튼.removeClass('orange');
        버튼.eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    })
}