import React from 'react';

const AddModal = () => {
    return (
        <div  className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
		<button className="px-6 py-2 rounded-sm">Cancel</button>
		<button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900">Agree</button>
	</div>
</div>
    );
};

export default AddModal;