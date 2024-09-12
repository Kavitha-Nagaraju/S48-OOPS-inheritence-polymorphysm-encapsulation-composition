import React from 'react'

function ResultTable(props) {
  return (

    <div>
        
      <table>
      <caption>{props.name} Tenth Result</caption>
        <thead>
            <th>S.no</th>
            <th>Subjects</th>
            <th>Max-Marks</th>
            <th>Obt-Marks</th>
            <th>Result</th>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Telugu</td>
                <td rowSpan={6} >100</td>
                <td>{props.telMarks}</td>
                <td>{props.telMarks>=35?"Pass":"Fail"}</td>
            </tr>
            <tr>
            <td>2</td>
            <td>English</td>
            
            <td>{props.engMarks}</td>
            <td>{props.engMarks>=35?"Pass":"Fail"}</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Hindhi</td>
            <td>{props.hinMarks}</td>
            <td>{props.hinMarks>=35?"Pass":"Fail"}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Maths</td>     
                <td>{props.mathMarks}</td>
                <td>{props.mathMarks>=35?"Pass":"Fail"}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Science</td>
                <td>{props.sciMarks}</td>
                <td>{props.sciMarks>=35?"Pass":"Fail"}</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Social</td>
                <td>{props.socMarks}</td>
                <td>{props.socMarks>=35?"Pass":"Fail"}</td>
            </tr>

        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}

export default ResultTable
