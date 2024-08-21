import { useAppSelector } from '@/redux/store';

export const Permission = {
  createAltoAdmin: 'createAltoAdmin',
  updateAltoAdmin: 'updateAltoAdmin',
  viewAltoAdmin: 'viewAltoAdmin',
  deleteAltoAdmin: 'deleteAltoAdmin',
  createOrgAdmin: 'createOrgAdmin',
  updateOrgAdmin: 'updateOrgAdmin',
  viewOrgAdmin: 'viewOrgAdmin',
  deleteOrgAdmin: 'deleteOrgAdmin',
  createTeamAdmin: 'createTeamAdmin',
  updateTeamAdmin: 'updateTeamAdmin',
  viewTeamAdmin: 'viewTeamAdmin',
  deleteTeamAdmin: 'deleteTeamAdmin',
  createUser: 'createUser',
  updateUser: 'updateUser',
  viewUser: 'viewUser',
  deleteUser: 'deleteUser',
  beOrgAdminSimultaneously: 'beOrgAdminSimultaneously',
  beTeamAdminSimultaneously: 'beTeamAdminSimultaneously',
  beUserSimultaneously: 'beUserSimultaneously',
  passwordSettings: 'passwordSettings',
  modify2FA: 'modify2FA',
  changeSessionExpireTime: 'changeSessionExpireTime',
  makeIPAllowing: 'makeIPAllowing',
  viewOrganisations: 'viewOrganizations',
  createOrganisation: 'createOrganization',
  updateOrganisation: 'updateOrganization',
  deleteOrganisation: 'deleteOrganization',
  viewTeams: 'viewTeams',
  createTeam: 'createTeam',
  updateTeam: 'updateTeam',
  deleteTeam: 'deleteTeam',
  viewRoles: 'viewRoles',
  createRole: 'createRole',
  updateRole: 'updateRole',
  deleteRole: 'deleteRole',
};

export const hasPermission = (permission: string) => {
  const permissions = useAppSelector((state) => state.auth.permissions);

  return permissions.includes(permission);
};
