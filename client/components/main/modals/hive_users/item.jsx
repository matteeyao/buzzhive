import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({idx, member, currentHive, hiveUsers, createHiveUser, removeHiveUser}) => {
    const adminStatus = idx == 0 ? "Admin" : "";

    const icon = idx == 0 ? <></> :
        Object
            .values(hiveUsers)
            .map(user => user.username)
            .includes(member.username) ?
            <FontAwesomeIcon icon="eye-slash" className="eye-slash"
                onClick={() => removeHiveUser({
                    hive_id: currentHive.id,
                    user_id: member.id
                })}
            /> : 
            <FontAwesomeIcon icon="user-plus" className="user-plus"
                onClick={() => createHiveUser({
                    hive_id: currentHive.id,
                    user_id: member.id
                })}
            />;
    
    return (
        <tr>
            <td className="users_table-username">{member.username} <span>{adminStatus}</span></td>
            <td className="users_table-action">{icon}</td>
        </tr>
    );
}