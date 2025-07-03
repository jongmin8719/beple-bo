import Input from '@components/module/Form/Input'
import styles from './Page.module.scss'

function TestPage() {
    return (
        <>
            <div className={styles.test}>
                <div className={styles.test_box}>
                    <h1>test</h1>
                </div>
                <Input inputType="box" type="text" name="input1" placeholder="플레이스 홀더" />
                <Input inputType="line" type="text" name="input2" placeholder="플레이스 홀더" />
            </div>
        </>
    )
}

export default TestPage
