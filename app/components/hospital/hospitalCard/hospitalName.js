'use client';

export default function HospitalName({ name }) {
  return (
    <div>
      <div
        className="w-[100px] text-center text-lime-500 text-xl font-bold font-['Pretendard']"
      >
        {name}
      </div>
    </div>
  );
}
