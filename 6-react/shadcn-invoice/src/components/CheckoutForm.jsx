import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CheckoutForm = () => {
  return (
    <div className=" mb-3">
      <form action="">
        <div className=" grid grid-cols-3 gap-3 border rounded-lg p-5">
          <div className=" col-span-1">
            <div className=" grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="select_product">Select a Product</Label>
              <Select id="select_product">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="q">Quantity</Label>
              <Input type="number" id="q" />
            </div>
          </div>
          <div className=" col-span-1">
            <Button className=" w-full h-full">Check Out</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
