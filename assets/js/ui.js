// $(".custom-select .opt").on("click", function () {
//   $(this).siblings(".opt-list-wrap").addClass("active");
// })

// $(".opt-list-grp .opt-list").on("click", function () {
//   var val = $(this).text();

//   $(this).parents(".opt-list-wrap").removeClass("active");
//   $(this).parents(".opt-list-wrap").siblings(".opt").text(val);
// })
/*
=============================================
폼양식 관련 js
=============================================
*/

// 1. 글자수 세기 input + 버튼 묶음
$('[data-unit-inp]').on('focus', function () {
  $(this).parents('.form-inp-unit-item').addClass('active');
}).on('blur', function () {
  $(this).parents('.form-inp-unit-item').removeClass('active');
})

// 2. 글자수 세기 input
$('[data-count-inp]').on('keyup', function () {
  let content = $(this).val();
  let maxlength = $(this).attr('maxlength');

  // 글자수 세기
  if (content.length == 0 || content == '') {
    $(this).siblings('.unit').children('.unit-count').text('0');
  } else {
    $(this).siblings('.unit').children('.unit-count').text(content.length);
  }

  // 글자수 제한
  if (content.length > maxlength) {
    $(this).val($(this).val().substring(0, maxlength));
    alert(`글자수는 ${maxlength}자까지 입력 가능합니다.`);
    $(this).siblings('.unit').children('.unit-count').text(maxlength);
  };
})

// 3. 자동 높이 조절되는 텍스트에어리어
$('textarea[data-autoresize]').each(function () {
  var offset = this.offsetHeight - this.clientHeight;

  var resizeTextarea = function (el) {
    $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
  };

  $(this).on('keyup input', function () { resizeTextarea(this); }).removeAttr('data-autoresize');
})
// // ========================== 헤더 ) hover 시 서브메뉴 노출
// $(".header .nav-wrap .nav-list").on("mouseover", function () {
//   $(".header").addClass("active");
// })

// $(".header").on("mouseleave", function () {
//   $(".header").removeClass("active");
// })

// // $("#opt-lang-btn").on("mouseover", function () {
// //   $(".opt-lang-grp").slideDown();
// // })

// // $("#opt-lang-btn-wrap").on("mouseleave", function () {
// //   $(".opt-lang-grp").slideUp();
// // })

// // ========================== 헤더 ) 확장형 메뉴
// $("#nav-open-btn").on("click", function () {
//   $("#nav-page").addClass("active");
// })

// $("#nav-close-btn").on("click", function () {
//   $("#nav-page").removeClass("active");
// })
/*
=============================================
모달창 열고 닫기
=============================================
*/

function openModal(id) {
  if ($('#' + id).hasClass('hide')) {
    $('#' + id).removeClass('hide');
  }

  $('#' + id).addClass('show');
}

function closeModal(id) {
  $('#' + id).addClass('hide');
}

// function allCloseModal() {
//   $('.modal-wrapper').removeClass('show');
// }