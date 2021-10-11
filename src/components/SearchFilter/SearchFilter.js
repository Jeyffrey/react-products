export default function SearchFilter({ onInput }) {
  const handleChange = (e) => {
    onInput(e.target.value.trim().toLowerCase())
  }

  return (
    <p>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </p>
  )
}
