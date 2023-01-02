export const deleteEmployee = (e) => {
  if (e.target.classList.contains('content__button_delete'))
    e.target.closest('tr').remove()
}
