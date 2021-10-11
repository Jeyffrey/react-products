export default function Checkbox({ onCheck }) {
  const handleCheck = (e) => {
    onCheck(e.target.checked)
  }

  return (
    <p>
      <label>
        <input type="checkbox" onChange={handleCheck} />
        <span>Only show products in stock</span>
      </label>
    </p>
  )
}
