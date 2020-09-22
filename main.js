
$( document ).ready(function() {

urlList = [
    'https://i.postimg.cc/QtyDtd1s/tragiccomedy.png',

    'https://i.postimg.cc/d3ZYTcjC/Evil-monk.png',

    'https://i.postimg.cc/1zR4V4nN/i-swear-to-god.png',

    'https://i.postimg.cc/tR81vXfL/FUGODAY20.png',

    'https://i.postimg.cc/x1D0M871/arivedercci.png',

    'https://i.postimg.cc/sgmgzy6f/Dead-or-alive.png',
    

    'https://i.postimg.cc/W1CC9GyP/narancia2.png',
 
    'https://i.postimg.cc/SsTSMr0B/chrollo.png',

    'https://i.postimg.cc/MGtxCDGn/Nero-hahn.png',

    'https://i.postimg.cc/bY5YY39b/Momo.png',

    'https://i.postimg.cc/bJJ8ptG3/Pannacotta.png',

    'https://i.postimg.cc/fLJL5Fvz/hifumi-kaoru.png',

    'https://i.postimg.cc/mkng0S8Y/Fugo-2.png',

    'https://i.postimg.cc/ZRhgmTZ7/14th-moon.png',

    'https://i.postimg.cc/Dw8RdjBg/Dante-Vergil-Comi.png',

    'https://i.postimg.cc/Xqg6mrCk/Fugo-3.png',

    'https://i.postimg.cc/y6hKkbb3/fugo-close-up.png',

    'https://i.postimg.cc/c1hjqyzh/IDROPMYDROPS.png',

    'https://i.postimg.cc/tCXjPNKS/Lio-fotia.png',

    

    'https://i.postimg.cc/qqJ5tjN2/Tarot-the-lovers.png',



    // ENDING REPEATED IMAGES BELOW (Do not insert new images after them)
    // Put below the first five URLs of the array
    'https://i.postimg.cc/QtyDtd1s/tragiccomedy.png',

    'https://i.postimg.cc/d3ZYTcjC/Evil-monk.png',

    'https://i.postimg.cc/1zR4V4nN/i-swear-to-god.png',

    'https://i.postimg.cc/tR81vXfL/FUGODAY20.png',

    'https://i.postimg.cc/x1D0M871/arivedercci.png',

    'https://i.postimg.cc/sgmgzy6f/Dead-or-alive.png',
    
    // Do not insert new images below
]

var urlListUpdate = 0

function setImgs() {

    $(document).find('.fibona1 img').addClass('hide').delay(400).queue(function() {
        $(this).attr('src', urlList[0 + urlListUpdate]).removeClass('hide').dequeue()
    })

    var delayValue = 500
    
    $(document).find('.fibona2 img').addClass('fibona2_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona2_out').attr('src', urlList[1 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona3 img').addClass('fibona3_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona3_out').attr('src', urlList[2 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona4 img').addClass('fibona4_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona4_out').attr('src', urlList[3 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona5 img').addClass('fibona5_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona5_out').attr('src', urlList[4 + urlListUpdate]).dequeue()
    })

    $(document).find('.fibona6 img').addClass('fibona6_out').delay(delayValue).queue(function() {
        $(this).removeClass('fibona6_out').attr('src', urlList[5 + urlListUpdate]).dequeue()
    })
  verifyBackButton()

}

indexLimit = urlList.length


$(document).on('click', '.section', function() {

    if(!$(this).is('#MAIN_IMG')) {
        if(urlListUpdate < indexLimit - 6) {
            urlListUpdate++
            setImgs()
            console.log('fsdanodasnkadskp')
        } else {
            $('#end_reached').fadeIn()
            setTimeout(function() {
                $('#end_reached').fadeOut(1000)
            }, 1500)
            urlListUpdate = 0
            setImgs()
        }
    } else {
        $('#MAIN_IMG').toggleClass('full_mode')
        $('#MAIN_IMG img').toggleClass('full_mode_img')
        $(this).find('.full_mode_text').toggleClass('profile_info_show')
    }
})

function verifyBackButton() {

    if(urlListUpdate < 1) {
        $('.main_img_back').hide()
    } else {
        $('.main_img_back').show()
    }
}

verifyBackButton()


$(document).on('click', '.main_img_back', function() {

    if(urlListUpdate > 0) {
        urlListUpdate--
        setImgs()
    }
})

/* 
$(document).on('click', '.section', function(rotateImages) {

if(!$(this).hasClass('MAIN_IMG')) {
    $('.fibona1').toggleClass('MAIN_IMG').toggle()
    $('.fibona2').toggleClass('fibona2').toggleClass('fibona1').toggleClass('MAIN_IMG')
    $('.fibona3').toggleClass('fibona3').toggleClass('fibona2')
    $('.fibona4').toggleClass('fibona4').toggleClass('fibona3')
    $('.fibona5').toggleClass('fibona5').toggleClass('fibona4')
    $('.fibona6').toggleClass('fibona6').toggleClass('fibona5')
} else {
    $('.MAIN_IMG').toggleClass('full_mode')
    $('.MAIN_IMG img').toggleClass('full_mode_img')
    $(this).find('.full_mode_text').toggleClass('profile_info_show')
}
})
*/
$('#profile').on('mouseenter', function() {
    
    if(!$(this).hasClass('profile_about_clicked')) {
        $('#profile .photo').addClass('photo_hovered').finish().delay(500).queue(function() {
            $('#hidden_profile_info').finish().addClass('profile_info_show').finish().dequeue()
        })

    }
})

$('#profile').on('mouseleave', function() {
    $('#profile .photo').finish().removeClass('photo_hovered')
    $('#hidden_profile_info').finish().removeClass('profile_info_show').delay(500).queue(function() {
        $('#profile').finish().removeClass('profile_hovered').finish().dequeue()
    })
})


//FIBONA ARROW

$(document).find('.fibona2_arrow, .fibona3_arrow, .fibona4_arrow').on('click', function() {
    $('.fibona2').trigger('click')
})

$(document).find('.main_img_zoom').on('click', function() {
    $('#MAIN_IMG').trigger('click')
})


$('.about_button').on('click', function() {
    $('#profile').toggleClass('profile_about_clicked')
    $('#hidden_profile_info').toggleClass('hidden_profile_info_about_clicked')
    $('.intro').toggleClass('intro_about_clicked')
    $('#buttons').toggleClass('hidden')
    $('.personal_info').toggleClass('personal_info_about_clicked')
    $('#profile .photo img'). toggleClass('profile_photo_img_about_clicked')
    $('#profile .photo').toggleClass('profile_photo_about_clicked').toggleClass('photo_hovered').delay(300)
    $('#about_info').delay(500).queue(function() {
        $(this).toggleClass('about_info_shows')
    }).dequeue()
})

$('.contact_button').on('click', function() {
    $('#profile').toggleClass('profile_about_clicked')
    $('#hidden_profile_info').toggleClass('hidden_profile_info_about_clicked')
    $('.intro').toggleClass('intro_about_clicked')
    $('#buttons').toggleClass('hidden')
    $('.personal_info').toggleClass('personal_info_about_clicked')
    $('#profile .photo img'). toggleClass('profile_photo_img_about_clicked')
    $('#profile .photo').toggleClass('profile_photo_about_clicked').toggleClass('photo_hovered')
    $('#contact_info').delay(500).queue(function() {
        $(this).toggleClass('contact_info_shows')
    }).dequeue()
})


$('.close_icon').on('click', function() {
    if($('#about_info').hasClass('about_info_shows')) {
        $('.about_button').trigger('click')
    }

    if ($('#contact_info').hasClass('contact_info_shows')) {
        $('.contact_button').trigger('click')
    }
   
})





})