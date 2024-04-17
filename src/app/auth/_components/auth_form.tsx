import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AuthForm() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4 ">
            <div className="space-y-8 w-2/3 lg:w-3/12 md:3/6">
                {/*  */}
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">NutriLife</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Login to your account...
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="user@mail.com"
                            required
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="Enter your password..."
                            required
                            type="password"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button className="w-full">Login</Button>
                        <Separator />
                        <Link className="w-full" href="#">
                            <Button className="w-full" variant="outline">
                                Login with Google
                            </Button>
                        </Link>
                        <Label className="flex gap-1 items-center justify-center">
                            Have no account?
                            <Link className="underline" href="#">
                                Sign in
                            </Link>
                        </Label>
                    </div>
                </div>
            </div>
        </div>
    );
}
