import type { User } from "../types"


type UserProps = {
    user: User
}

const UserDisplay = ({user}: UserProps) => {
  return (
    <div>
        <span className="user-content">{user.name}</span>
        <span className="user-content">{user.email}</span>
    </div>
  )
}

export default UserDisplay