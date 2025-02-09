import AppLayout from '@/Layouts/AppLayout';

export default function Testing() {
    return <div>Trih is Testing</div>;
}

Testing.layout = (page) => <AppLayout children={page} title={'Testing'} />;
