import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <div className="text-center text-gray-600 dark:text-white text-5xl font-semibold p-5 mt-40">You're logged in!</div>
        </AuthenticatedLayout>
    );
}
