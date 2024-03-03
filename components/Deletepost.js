'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdDelete } from "react-icons/md"
import { toast } from 'react-toastify';
import { BASE_API_URL } from '../lib/constant';


const Deletepost = ({ uid }) => {

    const router = useRouter();

    let deletehandler = async () => {
        if (confirm("Do you really want to delete post?")) {
            try {

                let res = await fetch(`${BASE_API_URL}/api/post/` + uid, {
                    method: "DELETE"
                })

                res = await res.json();
                if (res.success) {
                    toast.success('Post Deleted Successfully', {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                    setTimeout(() => {
                        router.refresh()
                    }, 1500);
                }
            } catch (error) {
                toast.error('Something error, Please check again', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                console.log("Cannot delete", error)
            }
        }
    }
    return (
        <>
            <div onClick={deletehandler} className='flex justify-between items-start gap-3 cursor-pointer'>
                <p>Delete</p>
                <MdDelete />
            </div>
        </>
    );
}

export default Deletepost;