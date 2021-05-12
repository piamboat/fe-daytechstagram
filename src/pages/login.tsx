import { PageHeader } from 'antd';
import React from 'react'

const login = () => {
    return (
        <div className="align-middle">
            <div className="p-5">
                <div className="w-full px-2.5 py-1 border focus:outline-none rounded-md min-h-screen">
                    <PageHeader
                        className="mb-2"
                        title="Daytechstagram"
                        subTitle="Share your hapiness"
                    />
                </div>
            </div>
        </div>
    );
}

export default login;