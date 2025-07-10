import DataTable from '@components/module/table/DataTable'
// 스타일 시트
import styles from './Page.module.scss'

const tableColumn = [10, 20, 20, 20, 15, 15] // 컬럼 너비
// 더미 데이터 - tbody용 2차원 배열
const dummyData = [
    ['1', '홍길동', 'hong@example.com', '개발팀', '2023-01-15'],
    ['2', '김철수', 'kim@example.com', '디자인팀', '2023-02-10'],
    ['3', '이영희', 'lee@example.com', '마케팅팀', '2023-03-05'],
    ['4', '박민수', 'park@example.com', '영업팀', '2023-04-20'],
    ['5', '최수진', 'choi@example.com', '개발팀', '2023-05-12'],
    ['6', '정우성', 'jung@example.com', '인사팀', '2023-06-08'],
    ['7', '한지민', 'han@example.com', '디자인팀', '2023-07-03'],
    ['8', '송강호', 'song@example.com', '마케팅팀', '2023-08-15']
]
// 더미 헤더 데이터
const dummyTableHead = [
    {
        name: '번호'
    },
    {
        name: '이름'
    },
    {
        name: '이메일'
    },
    {
        name: '부서'
    },
    {
        name: '입사일'
    },
    {
        name: '수정',
        render: (data) => {
            return <button>수정</button>
        }
    }
]

function WorkingPage() {
    return (
        <>
            <div className={styles.test}>
                <div className={styles.test_box}>
                    <h1>작업 현황 목록</h1>
                </div>
                <DataTable 
                    className={`${styles.data_table} ${styles['data-table--type-1']}`} 
                    colWidth={tableColumn} 
                    column={dummyTableHead} 
                    data={dummyData}
                />
            </div>
        </>
    )
}

export default WorkingPage
