import Checkbox from '@/Components/Checkbox';
import InputForm from '@/Components/Molecules/InputForm';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Card>
                    <CardHeader>
                        <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                            Plannify<span className="text-red-500">.</span>
                        </Link>
                        <h2 className="text-lg font-medium leading-relaxed tracking-tight text-left text-muted-foreground">
                            Sign in to your account
                        </h2>
                    </CardHeader>
                    <CardContent>
                        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                            <form className="space-y-3" onSubmit={submit}>
                                {/* form */}
                                <InputForm
                                    name="email"
                                    title="Email address"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    onError={errors.email}
                                    isFocused={true}
                                />

                                <InputForm
                                    name="password"
                                    title="Password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    onError={errors.password}
                                    infoTitle={'Forgot your password?'}
                                    ClassNameInfoTitle="text-red-500 hover:text-red-600"
                                />
                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                                    </label>
                                </div>

                                <div>
                                    <Button type="submit" variant="red" className="w-full" disabled={processing}>
                                        Sign in
                                    </Button>
                                </div>
                            </form>

                            <p className="mt-10 text-sm text-center text-muted-foreground">
                                Not a member?{' '}
                                <Link
                                    href={route('register')}
                                    className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

Login.layout = (page) => <GuestLayout title="Login" children={page} />;
