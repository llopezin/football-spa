import { createTable } from "../utils/createTables";
import { reFormatDate } from "../utils/interaction"
import { contentDiv } from "../utils/elements";

export default class Matches {
  constructor(data) {
    this.matches = data;
  }

  logData() {
    console.log(`Matches`);

    for (const matchDayNumber in this.matches) {
      const matchDayResults = this.matches[matchDayNumber];

      console.log(`Matchday #${matchDayNumber}`);

      matchDayResults.forEach(match => match.logData());
    }



  }

  renderData() {

    const contentDiv = document.createElement('div');
    const select = this.createSelect()


    contentDiv.setAttribute('id', 'content');
    contentDiv.appendChild(select)




    return contentDiv


  }

  createSelect() {
    const select = document.createElement('select')
    const label = document.createElement('label')
    const container = document.createElement('div')



    select.setAttribute('id', 'matchDaySelect')
    label.setAttribute('for', 'matchDaySelect')
    label.for = 'matchDaySelect'
    label.textContent = 'Choose a match day'

    for (const matchDayNumber in this.matches) {
      const matchDayResults = this.matches[matchDayNumber];
      const option = document.createElement('option')
      const matchDayDate = reFormatDate(matchDayResults[0].date)

      option.textContent = `Match day ${matchDayNumber} (${matchDayDate})`;
      option.value = matchDayNumber;
      option.dataset.matchDay = matchDayNumber;


      select.appendChild(option)
      container.appendChild(label)
      container.appendChild(select)
    }
    return container
  }



  changeMatchDay(day) {

    const matchDay = this.matches[day]
    const table = createTable('MATCHES')
    table.setAttribute('class', 'matches')

    matchDay.forEach(match => {
      const row = document.createElement('tr')

      row.textContent = match.renderData()
      table.appendChild(row)

    })

    contentDiv.replaceChild(table, contentDiv.lastChild)

  }
  printMatchDay(day) {

    const matchDay = this.matches[day]
    const table = createTable('MATCHES')
    table.setAttribute('class', 'matches')

    matchDay.forEach(match => {
      const row = document.createElement('tr')

      row.textContent = match.renderData()
      table.appendChild(row)

    })

    contentDiv.appendChild(table)

  }

}
