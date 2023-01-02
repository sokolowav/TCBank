export const sendData = () => {
  let result = {}
  const rows = document.querySelectorAll('tr')
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td')
    for (const cell of cells) {
      const text = cell.innerText.replace(/\s+/g, '')
      if (!text.length) {
        alert('Заполните все поля таблицы')
        return
      }
    }
    result = {
      ...result,
      [i]: {
        ФИО: cells[0].innerText.replace(/\s+/g, ' '),
        Должность: cells[1].firstElementChild.value,
        Возраст: cells[2].innerText.replace(/\s+/g, ' '),
        Компетенция: cells[3].innerText.replace(/\s+/g, ' '),
      },
    }
  }
  let data = JSON.stringify(result, null, 2)
  console.log(data)
}
