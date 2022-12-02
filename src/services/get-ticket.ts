import { supabase } from '../lib/supabase'

export const getAttendeeByEmail = async (email: string | number) => {
	const { data, error } = await supabase
		.from('users')
    .select('*')
		.eq('email', email)

	if (error) {
		console.error(error)
	}

	return {
    data: data[0],
		error
	}
}

export const leaveSlot = async (email: string | number) => {
	const { error } = await supabase
		.from('users')
    .update({ confirmation: true })
		.eq('email', email)

	if (error) {
		console.error(error)
	}

	return {
		error
	}
}