import { Link } from '@remix-run/react';

export const handle = {
    breadcrumb: () => <Link to="/parent/child">Child routes</Link>,
};
