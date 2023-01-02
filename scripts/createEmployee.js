export const createEmployee = () => {
  const table = document.querySelector('table')
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
  <td contenteditable="true" data-text></td>
  <td>
    <select>
      <option value="Аналитик" selected>Аналитик</option>
      <option value="Менеджер">Менеджер</option>
      <option value="Программист">Программист</option>
      <option value="Юрист">Юрист</option>
    </select>
  </td>
  <td contenteditable="true" data-num></td>
  <td contenteditable="true"></td>
  <td>
    <div class="content__button content__button_delete">-</div>
  </td>
</tr>`
  )
}
