import '../../../style/common.scss'


function DataTable({ colWidth, column, data, className }) {
  return (
    <div className={className}>
      <table>
        {/* 컬럼 그룹 설정 */}
        <colgroup>
          {colWidth.map((col, colIndex) => (
            <col key={colIndex} style={{ width: col + '%' }} />
          ))}
        </colgroup>
        {/* 테이블 헤더 */}
        <thead>
          <tr>
            {column.map((head, index) => (
              <th key={index}>{head.name}</th>
            ))}
          </tr>
        </thead>
        {/* 테이블 바디 */}
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {column.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render 
                    ? col.render(rowData[colIndex], rowData, rowIndex)
                    : rowData[colIndex]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable