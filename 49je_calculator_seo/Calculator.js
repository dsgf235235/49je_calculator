import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const calculate49thDay = (date) => {
  return format(addDays(new Date(date), 48), "yyyy-MM-dd");
};

export default function Calculator() {
  const [inputDate, setInputDate] = useState("");
  const [resultDate, setResultDate] = useState("");

  const handleCalculate = () => {
    if (inputDate) {
      setResultDate(calculate49thDay(inputDate));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md p-4 text-center">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">49제 날짜 계산기</h2>
          <Input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleCalculate} className="mb-4 w-full">
            계산하기
          </Button>
          {resultDate && (
            <p className="text-lg font-semibold text-gray-700">
              49제 날짜: {resultDate}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
