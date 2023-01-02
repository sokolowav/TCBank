import { createEmployee } from './createEmployee.js'
import { deleteEmployee } from './deleteEmployee.js'
import { sendData } from './sendData.js'
import { numValidation, textValidation } from './validation.js'

const addButton = document.querySelector('.content__button_add')
const sendButton = document.querySelector('.content__button_send')
const table = document.querySelector('table')

sendButton.addEventListener('click', sendData)
addButton.addEventListener('click', createEmployee)
table.addEventListener('click', deleteEmployee)
table.addEventListener('keydown', (e) => {
  if (e.target.dataset.text != undefined) textValidation(e)
  else if (e.target.dataset.num != undefined) numValidation(e)
})
