import React, { useState } from "react";
import { addDays, format } from "date-fns";

export default function Calculator() {
  const [inputDate, setInputDate] = useState("");
  const [resultDate, setResultDate] = useState("");

  const handleCalculate = () => {
    if (inputDate) {
      setResultDate(format(addDays(new Date(inputDate), 48), "yyyy-MM-dd"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800">
      {/* 헤더 */}
      <header className="w-full bg-gray-200 text-center py-4 border-b">
        <h1 className="text-2xl font-bold">쉽고 간편한 49제 날짜 계산기</h1>
      </header>

      {/* 본문 */}
      <main className="w-full max-w-2xl bg-white shadow-lg rounded-lg mt-6 p-6">
        <h2 className="text-lg font-semibold mb-4">연월일을 입력하여 49제를 계산하세요</h2>

        <div className="flex items-center justify-between border rounded-lg p-4 mb-4">
          <label htmlFor="date" className="mr-4 text-lg">날짜:</label>
          <input
            id="date"
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="border p-2 rounded w-1/2"
          />
          <button
            onClick={handleCalculate}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            계산하기
          </button>
        </div>

        {resultDate && (
          <div className="p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg">
            <p className="text-lg">49제 날짜: <span className="font-bold">{resultDate}</span></p>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-600">
          49제 날짜는 오늘 기준으로 계산됩니다. 오늘은 {format(new Date(), "yyyy년 MM월 dd일 (E)")}입니다.
        </p>
      </main>

      {/* 추가 설명 */}
      <section className="w-full max-w-2xl bg-gray-100 shadow-inner rounded-lg mt-6 p-6">
        <h3 className="text-lg font-bold mb-2">49제란 무엇인가요?</h3>
        <p className="text-sm leading-relaxed">
          49제는 불교 전통 의식으로, 사람이 사망한 후 49일 동안 영혼의 안식을 기원하는 의식입니다. 기일을 기준으로 49일째 되는 날에 마지막 제사를 지냅니다.
        </p>
      </section>

      {/* 푸터 */}
      <footer className="w-full text-center py-4 mt-6 bg-gray-200 text-sm text-gray-600 border-t">
        © 2025 49제 계산기 | 간편하고 정확한 날짜 계산기
      </footer>
    </div>
  );
}
