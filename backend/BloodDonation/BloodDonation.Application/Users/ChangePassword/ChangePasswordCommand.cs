﻿namespace BloodDonation.Application.Users.ChangePassword
{
    public sealed class ChangePasswordCommand : Abstraction.Messaging.ICommand
    {
        public string CurrentPassword { get; set; } = null!;
        public string NewPassword { get; set; } = null!;
    }
}
