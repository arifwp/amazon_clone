import 'package:flutter/material.dart';

final _messangerKey = GlobalKey<ScaffoldMessengerState>();

void showSnackbar(BuildContext context, String text) {
  _messangerKey.currentState?.showSnackBar(SnackBar(content: Text(text)));
  // ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));
}
