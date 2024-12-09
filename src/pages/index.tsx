import React from 'react'
import Layout from '@layout';
import LokiLogin from '@components/formLoki/LokiLogin';
interface homeProps {

}

const home: React.FC<homeProps> = () => {
    return (
        <Layout>
            <LokiLogin />
        </Layout>
    );
}

export default home;