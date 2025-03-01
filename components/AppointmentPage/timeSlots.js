export const generateTimeSlots = (selectedDate) => {
    const slots = [];
    const now = new Date();

    for (let hour = 10; hour <= 16; hour++) {
        const slotTime = new Date(selectedDate);
        slotTime.setHours(hour, 0, 0, 0);

        if (slotTime > now) {
            let formattedTime;
            if (hour === 12) {
                formattedTime = "12:00 PM";
            } else if (hour > 12) {
                formattedTime = `${hour - 12}:00 PM`;
            } else {
                formattedTime = `${hour}:00 AM`;
            }
            slots.push(formattedTime);
        }
    }

    return slots;
};
