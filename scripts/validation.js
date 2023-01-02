export const textValidation = (e) => {
  if (
    e.key >= 'Ё' ||
    e.key == 'ArrowLeft' ||
    e.key == 'ArrowRight' ||
    e.key == 'Delete' ||
    e.key == 'Backspace' ||
    e.key == 'Tab' ||
    e.key == ' '
  )
    return
  e.preventDefault()
}

export const numValidation = (e) => {
  if (
    (e.key >= '0' && e.key <= '9') ||
    e.key == 'ArrowLeft' ||
    e.key == 'ArrowRight' ||
    e.key == 'Delete' ||
    e.key == 'Backspace' ||
    e.key == 'Tab'
  )
    return
  e.preventDefault()
}
