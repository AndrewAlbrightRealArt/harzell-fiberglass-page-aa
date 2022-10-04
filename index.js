let detailsBtnStatus = 'down'

$('.details-btn').click(function(){
  let targetParent = $(this).parent()
  if (detailsBtnStatus === 'down') {
    $('.details-icon', targetParent).css('transform', 'rotate(180deg)')
    $('.product-copy', targetParent).slideToggle('slow')
    detailsBtnStatus = 'up'
  } else {
    $('.details-icon', targetParent).css('transform', 'rotate(0deg)')
    $('.product-copy', targetParent).slideToggle('slow')
    detailsBtnStatus = 'down'
  }
})
