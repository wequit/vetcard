import { useState } from 'react';
import { useUserStore } from '@/entities/user/model/user-store';
import { UserProfileView } from '@/entities/user/ui/UserProfileView';
import { EditUserProfileForm } from '@/features/edit-user-profile/ui/EditUserProfileForm';

export const UserProfilePage = () => {
    const { user, setUser } = useUserStore();
    const [editing, setEditing] = useState(false);
    if (!user) return <div>Нет данных пользователя</div>;
    return (
        <div className="max-w-2xl mx-auto p-6">
            {editing ? (
                <EditUserProfileForm user={user} onSave={u => { setUser(u); setEditing(false); }} onCancel={() => setEditing(false)} />
            ) : (
                <UserProfileView user={user} onEdit={() => setEditing(true)} />
            )}
        </div>
    );
};