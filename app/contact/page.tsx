"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      <div className="bg-[url('/images/slider2.jpg')]">
        <h1
          className="container py-64 text-4xl font-semibold tracking-widest text-center
        text-white"
        >
          Contact Us for all your concerns. We are here to serve you
        </h1>
      </div>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Sales
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Please feel free to ask any question
          </p>
        </div>
        <h3 className="items-center text-center ">Line 1 (+233245365939)</h3>
        <h3 className="items-center text-center ">Line 2 (+233245365939)</h3>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="mt-2.5">
              <Input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="mt-2.5">
              <Input type="text" name="lastname" placeholder="Last Name" />
            </div>

            <div className="sm:col-span-2">
              <div className="mt2.5">
                <Input type="text" name="company" placeholder="Company" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt2.5">
                <Input type="email" name="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt2.5">
                <Textarea
                  name="message"
                  placeholder="Type Your Message Here..."
                />
              </div>
            </div>

            <Switch.Group as="div" className="flex gap-x4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-primary" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  <span className="sr-only text-white">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 pl-4">
                By selecting this, you agree to our
                <a href="#" className="font-semibold text-primary">
                  {""} privacy&nbsp;policy
                </a>
              </Switch.Label>
            </Switch.Group>
            <div className="mt-10">
              <Button
                type="submit"
                className="flex w-full items-center px-8
            py-3 text-white rounded-full shadow-lg hover:bg-gray-800
            hover:ring-2 hover:ring-gray-950 ring-offset-2"
              >
                Let&apos;s Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}