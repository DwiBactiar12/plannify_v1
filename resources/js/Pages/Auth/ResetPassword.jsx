import InputForm from '@/Components/Molecules/InputForm';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Card>
                    <CardHeader>
                        <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                            Plannify<span className="text-red-500">.</span>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={submit}>
                                {/* form */}
                                <InputForm
                                    name={'email'}
                                    type={'email'}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder={'Email'}
                                    onError={errors.email}
                                    isFocused={true}
                                    title={'Email'}
                                />
                                <InputForm
                                    name={'password'}
                                    type={'password'}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder={'Password'}
                                    onError={errors.password}
                                    title={'Password'}
                                />
                                <InputForm
                                    name={'password_confirmation'}
                                    type={'password'}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder={'Password'}
                                    onError={errors.password_confirmation}
                                    title={'Password Confirmation'}
                                />

                                <div>
                                    <Button type="submit" variant="red" className="w-full" disabled={processing}>
                                        Reset Password
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

resetPassword.layout = (page) => <GuestLayout children={page} title="Reset Password" />;
