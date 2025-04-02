const PreviewField = ({
  label,
  value,
  required = false,
}: {
  label: string;
  value?: string | null;
  required?: boolean;
}) => (
  <div className="flex flex-col md:flex-row gap-1">
    <div className="flex">
      <strong className={`${required ? "required" : ""} capitalize`}>{`${label}`}</strong>
      <strong>:</strong>
    </div>
    <span className="capitalize ml-2 md:ml-0">{value ?? "N/A"}</span>
  </div>
);

export default PreviewField;