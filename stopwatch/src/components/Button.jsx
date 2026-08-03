

const Button = ({title,onClick,disabled}) => {
  return (
    <div className="w-20 border border-white p-1.2 text-center bg-blue-500">
        <button disabled={disabled} onClick={onClick} className="bg-blue-500 text-white disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60">{title}</button>
    </div>
  )
}

export default Button