import InputForm from '@/Components/Molecules/InputForm';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout title="Forgot Password">
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                Plannify<span className="text-red-500">.</span>
                            </Link>
                            <h2 className="text-lg font-medium leading-9 tracking-tight text-left text-muted-foreground">
                                Forgot your password? No problem. Just let us know your email address and we will email
                                you a password reset link that will allow you to choose a new one.
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                                <form className="space-y-6" onSubmit={submit}>
                                    {/* form */}
                                    <InputForm
                                        name="email"
                                        title="Email"
                                        type="email"
                                        value={data.email}
                                        placeholder={'Email Address'}
                                        onChange={(e) => setData('email', e.target.value)}
                                        onError={errors.email}
                                        isFocused={true}
                                    />
                                    <div>
                                        <Button type="submit" variant="red" className="w-full" disabled={processing}>
                                            Email password reset link
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GuestLayout>
    );
}
