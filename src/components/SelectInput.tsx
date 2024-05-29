function SelectInput({
  selectedDays,
  setSelectedDays,
}: {
  selectedDays: string;
  setSelectedDays: (data: string) => void;
}) {
  return (
    <select
      value={selectedDays}
      onChange={(e) => setSelectedDays(e.target.value)}
    >
      <option value={7}>last 7 days</option>
      <option value={14}>last 14 days</option>
      <option value={30}>last 30 days</option>
      <option value={90}>last 90 days</option>
    </select>
  );
}

export default SelectInput;
